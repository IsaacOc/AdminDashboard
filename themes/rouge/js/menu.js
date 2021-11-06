import {
    mdiAccountCircle,
    mdiDesktopMac,
    mdiLock,
    mdiSquareEditOutline,
    mdiTable,
    mdiResponsive,
    mdiAccountCash,
    mdiAccessPoint,
    mdiCalendarEdit,
    mdiChartAreaspline,
    mdiBallot,
    mdiArmFlex,
    mdiCogOutline,
    mdiCloud
} from "@mdi/js";

export default [
    [
        {
            to: { name: "dashboard" },
            icon: mdiDesktopMac,
            label: "Dashboard",
        },
    ],

    [
        {
            label: "Reports",
            icon: mdiChartAreaspline,
            updateMark: true,
            menu: [
                {
                    label: "App Earning Report",
                    to: { name: "reports-app-earning" },
                },

                {
                    label: "Booking Report",
                    to: { name: "reports-booking" },
                },

                {
                    label: "Customer Report",
                    to: { name: "reports-customer" },
                },

                {
                    label: "Payment Gateway Report",
                    to: { name: "reports-payment-gateway" },
                },

                {
                    label: "Provider Report",
                    to: { name: "reports-provider" },
                },

                {
                    label: "Provider Earning Report",
                    to: { name: "reports-provider-earning" },
                },

                {
                    label: "Revenue Received Report",
                    to: { name: "reports-revenue-received" },
                },
            ],
        },
        {
            label: "Business",
            icon: mdiSquareEditOutline,
            menu: [
                {
                    label: "Business Group",
                    to: { name: "business-group" },
                },
                {
                    label: "Business List",
                    to: { name: "business-list" },
                },
            ],
        },
        {
            to: { name: "bookings" },
            label: "Bookings",
            icon: mdiCalendarEdit,
        },
        {
            to: { name: "services" },
            label: "Services",
            icon: mdiResponsive,
        },
        {
            label: "Financial",
            icon: mdiAccountCash,
            updateMark: true,
            menu: [
                {
                    label: "Accounting",
                    to: { name: "accounting" },
                },

                {
                    label: "Accounting Statements",
                    menu: [
                        {
                            label: "App",
                            to: { name: "accounting-statement-app" },
                        },

                        {
                            label: "Customer",
                            to: { name: "accounting-statement-customer" },
                        },

                        {
                            label: "Operator",
                            to: { name: "accounting-statement-operator" },
                        },

                        {
                            label: "PG",
                            to: { name: "accounting-statement-pg" },
                        },

                        {
                            label: "Provider",
                            to: { name: "accounting-statement-provider" },
                        },
                    ],
                },
            ],
        },

        {
            label: "Marketing",
            icon: mdiAccessPoint,
            updateMark: true,
            menu: [
                {
                    label: "Campaign Qualified Trip Logs",
                    to: { name: "campaign-qualified-trip-logs" },
                },

                {
                    label: "Input Booking Logs",
                    to: { name: "input-booking-logs" },
                },

                {
                    label: "Loyalty Program",
                    to: { name: "loyalty-program" },
                },

                {
                    label: "Offers",
                    to: { name: "offers" },
                },

                {
                    label: "Promo Code Claim Logs",
                    to: { name: "promo-code-claim-logs" },
                },

                {
                    label: "Promo Codes",
                    to: { name: "promo-codes" },
                },

                {
                    label: "Referral Campaign",
                    to: { name: "referral-campaign" },
                },
            ],
        },

        {
            to: { name: "customers" },
            label: "Customers",
            icon: mdiAccountCircle,
        },
        {
            label: "Service Providers",
            icon: mdiAccountCircle,
            menu: [
                {
                    label: "Service Providers",
                    to: { name: "provider-list" },
                },
                {
                    label: "Service Providers Plans",
                    to: { name: "provider-plans" },
                },
            ],
        },
        {
            label: "Logs",
            icon: mdiTable,
            menu: [
                {
                    label: "Email logs",
                    to: { name: "email" },
                },
                {
                    label: "Notifications",
                    to: { name: "notifications" },
                },
                {
                    label: "Sms logs",
                    to: { name: "sms" },
                },
            ],
        },
        {
            label: "Category",
            icon: mdiBallot,
            menu: [
                {
                    label: "Category",
                    to: { name: "category" },
                },
                {
                    label: "Sub Category",
                    to: { name: "sub-category" },
                },
            ],
        },
        {
            label: "Ratings",
            icon: mdiArmFlex,
            menu: [
                {
                    label: "Customer Ratings",
                    to: { name: "customer-ratings" },
                },
                {
                    label: "Provider Ratings",
                    to: { name: "provider-ratings" },
                },
            ],
        },
        {
            label: "Settings",
            icon: mdiCogOutline,
            updateMark: true,
            menu: [
                {
                    label: "Payment Gateways",
                },

                {
                    label: "App Versions"
                },

                {
                    label: "Cancellation Reasons",
                },

                {
                    label: "Terms & Conditions",
                },

                {
                    label: "Privacy Policy",
                },

                {
                    label: "Mobile App Configuration",
                },

                {
                    label: "Languages",
                },
            ],
        },
        {
            label: "Website",
            icon: mdiCloud,
            updateMark: true,
            menu: [
                {
                    label: "About Us",
                },

                {
                    label: "Contact Us"
                },
            ],
        },
        {
            label: "Manage Access",
            icon: mdiLock,
        },
    //     {
    //         to: "/login",
    //         label: "Login",
    //         icon: mdiLock,
    //     },
    //     {
    //         to: "/error",
    //         label: "Error",
    //         icon: mdiAlertCircle,
    //     },
    //     {
    //         label: "Submenus",
    //         subLabel: "Submenus Example",
    //         icon: mdiViewList,
    //         menu: [
    //             {
    //                 label: "Sub-item One",
    //             },
    //             {
    //                 label: "Sub-item Two",
    //             },
    //         ],
    //     },
    // ],
    // "About",
    // [
    //     {
    //         href: "https://justboil.me/tailwind-admin-templates/vue-dashboard",
    //         label: "Premium version",
    //         icon: mdiMonitorClean,
    //         target: "_blank",
    //     },
    //     {
    //         href: "https://github.com/justboil/admin-one-vue-tailwind",
    //         label: "GitHub",
    //         icon: mdiGithub,
    //         target: "_blank",
    //     },
    ],
];
