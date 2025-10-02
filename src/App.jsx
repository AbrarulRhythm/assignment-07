import { Suspense, useState } from 'react';
import './App.css';

import { ToastContainer } from 'react-toastify';

import Banner from './components/Banner/Banner';
import MainSection from './components/MainSection/MainSection';
import Navbar from './components/Navbar/Navbar';
import FallbackAnimation from './components/FallbackAnimation/FallbackAnimation';
import Footer from './components/Footer/Footer';

const fetchCustomerTickets = async () => {
    const res = await fetch('/customer_tickets.json');
    return res.json();
}

const customerTicketsPromise = fetchCustomerTickets();

function App() {

    const [taskProgressCount, setTaskProgressCount] = useState(0);
    const [resolvedCount, setResolvedCount] = useState(0);
    const [inProgressTask, setInProgressTask] = useState([]);
    const [resolvedTaskData, setResolvedTaskData] = useState([]);

    const taskStatus = (customerTicket) => {
        const newTaskStatus = ([...inProgressTask, customerTicket]);
        setInProgressTask(newTaskStatus);
        setTaskProgressCount(taskProgressCount + 1);
    }

    const completeTask = (task) => {
        const filterProgressTask = inProgressTask.filter(progressTask => progressTask.id !== task.id);
        setInProgressTask(filterProgressTask);
        setTaskProgressCount(taskProgressCount - 1);
        setResolvedCount(resolvedCount + 1);

        const filterForResolvedTask = inProgressTask.filter(progressTask => progressTask.id === task.id);
        const newResolvedTask = ([...resolvedTaskData, ...filterForResolvedTask]);
        setResolvedTaskData(newResolvedTask);
    }

    return (
        <>
            <Navbar></Navbar>
            <Banner
                taskProgressCount={taskProgressCount}
                resolvedCount={resolvedCount}
            ></Banner>
            <Suspense fallback={<FallbackAnimation></FallbackAnimation>}>
                <MainSection
                    resolvedTaskData={resolvedTaskData}
                    completeTask={completeTask}
                    inProgressTask={inProgressTask}
                    taskStatus={taskStatus}
                    customerTicketsPromise={customerTicketsPromise}
                ></MainSection>
            </Suspense>
            <Footer></Footer>

            <ToastContainer />
        </>
    )
}

export default App
