export const EOM = ({employee}) => {
    return(
        <div className="page-container">
            <h1>Employee of the month</h1>
            <div>
                <h3>{employee.name}</h3>
                <p>{employee.position}</p>
                <img src={employee.image} />
            </div>
        </div>
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