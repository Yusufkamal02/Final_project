import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import UserLayout from '@/Layouts/UserLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth, }) {
    return (
        <UserLayout>
            Dashboard
        </UserLayout>
    );
}

