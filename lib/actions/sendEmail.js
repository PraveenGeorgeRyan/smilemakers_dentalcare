"use server";

import React from "react";

import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";
import { Resend } from "resend";
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const senderEmail = formData.email;
  const message = formData.message;
  const senderFirstName = formData.firstName;
  const senderLastName = formData.lastName;

  console.log(senderEmail);
  console.log(message);

  // simple server-side validation
  if (!validateString(senderFirstName, 500)) {
    return {
      error: "Invalid sender name",
    };
  }
  if (!validateString(senderLastName, 500)) {
    return {
      error: "Invalid sender name",
    };
  }
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
      to: "p.g.ryan333@gmail.com",
      subject: "Message from dental contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message,
        senderFirstName,
        senderLastName,
        senderEmail,
      }),
    });
  } catch (error) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};

export const mailAction = async (email, message, firstName, lastName) => {
  const { data, error } = await sendEmail({
    email,
    message,
    firstName,
    lastName,
  });

  return {
    data,
    error,
  };
};
