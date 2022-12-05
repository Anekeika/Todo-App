import type {NextPage} from 'next'
import Head from 'next/head'
import {Tab, Tabs} from '../components/Tabs'
import todos from '../todos'
import {useState} from "react";

const Home: NextPage = () => {
    console.log(todos.filter(todo => todo.isCompleted));

    const [todoList, setTodoList] = useState(todos)
    const [todoListCompleted, setTodoListCompleted] = useState(todos.filter(todo => todo.isCompleted))
    const [todoListUncompleted, setTodoListUncompleted] = useState(todos.filter(todo => !todo.isCompleted))
    const [activeTab, setActiveTab] = useState('All')

    return (
        <div>

            <main>

                <Tabs>
                    <Tab title="All">
                        <ul>

                            {todoList.map(todo =>
                                <li key={todo.id}>
                                    {todo.task}
                                </li>
                            )}
                        </ul>
                    </Tab>
                    <Tab title="Completed"><ul>

                        {todoListCompleted.map(todo =>
                            <li key={todo.id}>
                                {todo.task}
                            </li>
                        )}
                    </ul></Tab>
                    <Tab title="Uncompleted"><ul>

                        {todoListUncompleted.map(todo =>
                            <li key={todo.id}>
                                {todo.task}
                            </li>
                        )}
                    </ul></Tab>
                </Tabs>
            </main>

            <footer>

            </footer>
        </div>
    )
}

export default Home
