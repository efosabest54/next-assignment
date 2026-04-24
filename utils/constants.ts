interface Inav{
    path: string;
    name: string;
}

export const navLinks:Inav[]=[
    {path: "/Blog", name: "BLOG"},
    {path: "/Services", name: "SERVICES"},
    {path: "/About", name: "ABOUT"},
    {path: "/Testimony", name: "TESTIMONY"},
];


export const subRoutingNav:Inav[] = [
    {path: "/Services/customer-service", name: "CUSTOMER-SERVICE"},
    {path: "/Services/internet", name: "INTERNET"},
    {path: "/Services/laundry", name: "LAUNDRY"},
];
