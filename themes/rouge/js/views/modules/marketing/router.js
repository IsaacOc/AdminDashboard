export default [
    {
        path: "/marketing/campaign-qualified-trip-logs",
        name: "campaign-qualified-trip-logs",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/CampaignQualifiedTripLogs/CampaignQualifiedTripLogs"
            ),
    },

    {
        path: "/marketing/input-booking-logs",
        name: "input-booking-logs",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/InputBookingLogs/InputBookingLogs"
            ),
    },

    {
        path: "/marketing/loyalty-program",
        name: "loyalty-program",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/LoyaltyProgram/LoyaltyProgram"
            ),
    },

    {
        path: "/marketing/offers",
        name: "offers",
        component: () =>
            import(/* webpackChunkName: "modules" */ "./views/Offers/Offers"),
    },

    {
        path: "/marketing/promo-code-claim-logs",
        name: "promo-code-claim-logs",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/PromoCodeClaimLogs/PromoCodeClaimLogs"
            ),
    },

    {
        path: "/marketing/promo-codes",
        name: "promo-codes",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/PromoCodes/PromoCodes"
            ),
    },
    {
        path: "/marketing/referral-campaign",
        name: "referral-campaign",
        component: () =>
            import(
                /* webpackChunkName: "modules" */ "./views/ReferralCampaign/ReferralCampaign"
            ),
    },
];
