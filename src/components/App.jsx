import { SharedLayout } from "./SharedLayout";
import { Navigate, Route, Routes} from "react-router-dom";
import { lazy } from "react";


const HomePage = lazy(() => import('../pages/Home'));
const DashboardPage = lazy(() => import('../pages/Dashboard'));
const InboxPage = lazy(() => import('../pages/InboxP'));
const ProductsPage = lazy(() => import('../pages/Products'));
const InvoicesPage = lazy(() => import('../pages/Invoices'));
const CustomersPage = lazy(() => import('../pages/Customers'));
const ChatRoomPage = lazy(() => import('../pages/ChatRoom'));
const CalendarPage = lazy(() => import('../pages/Calendar'));
const HelpCenterPage = lazy(() => import('../pages/HelpCenter'));
const SettingsPage = lazy(() => import('../pages/Settings'));



export const App= () => {
  return (
    <Routes>
      <Route parth='/' element = {<SharedLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='*' element={<Navigate to ='/'/>}/>
      <Route path ='/dashboard' element={<DashboardPage/>}/>
      <Route path ='/inbox' element={<InboxPage/>}/>
      <Route path ='/products' element={<ProductsPage/>}/>
      <Route path ='/invoices' element={<InvoicesPage/>}/>
      <Route path ='/customers' element={<CustomersPage/>}/>
      <Route path ='/chatRoom' element={<ChatRoomPage/>}/>
      <Route path='/calendar' element={<CalendarPage/>}/>
      <Route path ='/helpCenter' element={<HelpCenterPage/>}/>
      <Route path ='/settings' element={<SettingsPage/>}/>
      </Route>    
    </Routes>
  );
};
