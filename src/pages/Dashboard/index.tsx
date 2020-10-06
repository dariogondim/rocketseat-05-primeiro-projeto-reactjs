import React from 'react';
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'



const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github.</Title>

            <Form action="">
                <input placeholder="Digite o nome do repositório"></input>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste" >
                    <img
                        src="https://avatars1.githubusercontent.com/u/23459234?s=460&u=424588012c92aad7fa46378a067407b80a7b779d&v=4"
                        alt="Dario Gondim"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable Reactjs & React Native forms!</p>
                    </div>

                    <FiChevronRight size={20}></FiChevronRight>
                </a>
                <a href="teste" >
                    <img
                        src="https://avatars1.githubusercontent.com/u/23459234?s=460&u=424588012c92aad7fa46378a067407b80a7b779d&v=4"
                        alt="Dario Gondim"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable Reactjs & React Native forms!</p>
                    </div>

                    <FiChevronRight size={20}></FiChevronRight>
                </a>
                <a href="teste" >
                    <img
                        src="https://avatars1.githubusercontent.com/u/23459234?s=460&u=424588012c92aad7fa46378a067407b80a7b779d&v=4"
                        alt="Dario Gondim"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable Reactjs & React Native forms!</p>
                    </div>

                    <FiChevronRight size={20}></FiChevronRight>
                </a>
            </Repositories>
        </>
    )




}

export default Dashboard
