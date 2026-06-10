export const prerender = false;

export const config = {
  runtime: "edge",
};

import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(
  import.meta.env.RESEND_API_KEY
);

export const POST: APIRoute = async ({ request }) => {

  try {

    // METHOD HARDENING
    if (request.method !== "POST") {

      return new Response(
        JSON.stringify({
          success: false,
          message: "Method not allowed"
        }),
        {
          status: 405,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    // PARSE BODY
    const body = await request.json();

    const {
      name,
      email,
      details,
      website
    } = body;

    // HONEYPOT
    if (website) {

      return new Response(
        JSON.stringify({
          success: false,
          message: "Bot detected"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    // BASIC VALIDATION
    if (
      !name ||
      !email ||
      !details
    ) {

      return new Response(
        JSON.stringify({
          success: false,
          message: "Missing required fields"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    // SEND EMAIL
    const { data, error } =
      await resend.emails.send({

        from:
          "Qryptex <noreply@qryptex.in>",

        to: [
          "contact@qryptex.in"
        ],

        replyTo: email,

        subject:
          `New Inquiry from ${name}`,

        html: `
          <div style="
            font-family:Arial;
            padding:24px;
          ">

            <h2>
              New Contact Submission
            </h2>

            <p>
              <strong>Name:</strong>
              ${name}
            </p>

            <p>
              <strong>Email:</strong>
              ${email}
            </p>

            <hr />

            <div style="
              white-space:pre-wrap;
            ">
              ${details}
            </div>

          </div>
        `
      });

    // RESEND FAILURE
    if (error) {

      console.error(
        "RESEND ERROR:",
        error
      );

      return new Response(
        JSON.stringify({
          success: false,
          message:
            error.message ||
            "Email delivery failed"
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }

    // SUCCESS
    return new Response(
      JSON.stringify({
        success: true,
        data
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

  } catch (error: any) {

    console.error(
      "CONTACT API ERROR:",
      error
    );

    return new Response(
      JSON.stringify({
        success: false,
        message:
          error?.message ||
          "Internal Server Error"
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }
};

