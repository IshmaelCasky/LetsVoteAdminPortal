import { useAuthContext } from './AuthContext';
import DashboardLayout from './DashboardComponents/DashboardLayout';
import { DataProvider } from './DataContext';

const Dashboard = () => {
    const { user } = useAuthContext();
    return (
        <DataProvider>
            <div>
                {user ? <DashboardLayout /> : null}
            </div>
        </DataProvider>
    )
}

export default Dashboard