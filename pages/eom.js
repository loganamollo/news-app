import Layout from '../components/Layout'
import styles from '../styles/EOM.module.css'

export const EOM = ({employee}) => {
    return(
        <Layout>
            <div className="page-container">
                <div className={styles.main}>
                
                <h1>Employee of the month</h1>
                
                <div className={styles.employeeOfTheMonth}>
                    <h3>{employee.name}</h3>
                    <p>{employee.position}</p>
                    <img src={employee.image} />
                </div>
            </div>
        </div>
        </Layout>
    )
}

export const getServerSideProps = async (pageContext) => {
     const apiResponse = await fetch(
         'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth'
     )
     const employee = await apiResponse.json()
    return({
        props: {
            employee
        }
    })
}

export default EOM