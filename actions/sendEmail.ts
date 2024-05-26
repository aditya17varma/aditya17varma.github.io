"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import { get } from "http";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if (!validateString(senderEmail, 500)) {
    return {
        error: "Invalid sender email",
    };
    }
    if (!validateString(message, 5000)) {
    return {
        error: "Invalid message",
    };
    }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "aditya17varma@gmail.com",
            subject: "Message from Portfolio Site",
            reply_to: senderEmail,
            react: React.createElement(ContactFormEmail, {
            message: message,
            senderEmail: senderEmail,
            }),
        });
    } catch (error: unknown) {
        console.log("Error sending email catch");
        return {
            error: getErrorMessage(error),
        };
    }
    if (data.error) {
    return {
        error: getErrorMessage(data.error),
    };
    }

    return {
    data,
    };
};