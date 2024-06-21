import { fetchCustomers } from "@/app/lib/data";
import Breadcrumbs from "../../../ui/invoices/breadcrumbs";
import Form from "../../../ui/invoices/create-form";

export default async function Page() {
    const customer = await fetchCustomers();

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {label: 'Invoices', href: 'dashboard/invoices'},
                    {label: 'Create Invoice', href: '/dashboard/invouce/create',
                    active: true,
                },
            ]} />
            <Form customers={customer} />
        </main>
    );
}