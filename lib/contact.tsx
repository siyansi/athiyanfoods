export const WHATSAPP_NUMBER = "919361953377";

export function waLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Structured machine enquiry: heading, machine name and its type/unit. */
export function enquiryMessage(productName: string, unitName: string): string {
  return [
    "Hello Athiyan Food Machines!",
    "",
    "*Machine Enquiry*",
    `Machine : ${productName}`,
    `Machine Type : ${unitName}`,
    "",
    "Please share the full details, capacity and price.",
  ].join("\n");
}

export function productEnquiryLink(productName: string, unitName: string): string {
  return waLink(enquiryMessage(productName, unitName));
}

export const PHONE_DISPLAY = "+91 93619 53377";
export const PHONE_ALT_DISPLAY = "+91 95661 95377";
export const PHONE_3RD_DISPLAY = "+91 95145 53377";
export const MAPS_LINK =
  "https://www.google.com/maps/search/?api=1&query=Athiyan+Food+Machines+Avarampalayam+Main+Road+Coimbatore";
