import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Link,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <Html>
      <Head />
      <Preview>New Portfolio Contact: {senderEmail}</Preview>
      <Tailwind>
        <Body className="bg-gray-50">
          <Container className="mx-auto py-20">
            <Section className="rounded-xl border border-gray-200 bg-white px-10 py-8 shadow-lg">
              {/* Header */}
              <Heading className="mb-8 border-b pb-4 text-3xl font-bold text-gray-800">
                New Portfolio Inquiry
              </Heading>

              {/* Timestamp */}
              <Text className="mb-4 text-sm text-gray-500">
                Received on {currentDate}
              </Text>

              {/* Message Content */}
              <Section className="mb-6 rounded-lg bg-gray-50 p-6">
                <Text className="mb-2 text-sm font-semibold text-gray-600">
                  Message Content:
                </Text>
                <Text className="whitespace-pre-wrap text-gray-800">
                  {message}
                </Text>
              </Section>

              <Hr className="my-6 border-gray-200" />

              {/* Sender Information */}
              <Section className="rounded-lg bg-blue-50 p-4">
                <Text className="text-sm text-gray-600">
                  From:{' '}
                  <Link
                    href={`mailto:${senderEmail}`}
                    className="font-medium text-blue-600 hover:text-blue-800"
                  >
                    {senderEmail}
                  </Link>
                </Text>
              </Section>

              {/* Footer */}
              <Hr className="my-6 border-gray-200" />
              <Text className="text-center text-sm text-gray-500">
                This is an automated message from Victor Koech's Portfolio
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}