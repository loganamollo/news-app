import { useRouter } from "next/router"

import Layout from "../../components/Layout"
import styles from '../../styles/Feed.module.css'

export const Feed = ({pageNumber, articles}) => {
    const router = useRouter()
    return(
        <Layout>
            <div className="page-container">
            <div className={styles.main}>
                {
                    articles.map(
                        (article, index) => (
                            <div key={index} className={styles.post}>
                                <h2 onClick={() => window.location.href = article.url}>{article.title}</h2>
                                <p>{article.description}</p>
                                {article.urlToImage && <img src={article.urlToImage} />}
                            </div>
                        )
                    )

                }
            </div>
            <div className={styles.paginator}>
                <div 
                className={pageNumber === 1? styles.disabled : styles.active}
                onClick = { 
                    () => {
                        if(pageNumber > 1){ 
                            router.push(`/feed/${pageNumber - 1}`).then(window.scrollTo(0, 0))
                        }
                    }
                }
                >
                    Previous page
                </div>

                <div>
                    Page {pageNumber}
                </div>

                <div
                className={pageNumber === 5 ? styles.disabled : styles.active}
                onClick = { 
                    () => {
                        if(pageNumber < 5){ 
                            router.push(`/feed/${pageNumber + 1}`).then(window.scrollTo(0, 0))
                        }
                    }
                }
                >
                    Next page
                </div>
            </div>
            </div>

        </Layout>
    )
}

export const getServerSideProps = async (pageContext) => {
    const pageNumber = pageContext.query.slug
     if(!pageNumber || pageNumber < 1 || pageNumber > 5){
         return{
             props: {
                 articles: [],
                 pageNumber: 1,
             }
         }
     }

     const apiResponse = await fetch(
         `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
         {
             headers: {
                 Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
             }
         }
     )

     const {articles} = await apiResponse.json()
     console.log(articles)

     return({
         props: {
            articles,
            pageNumber: Number.parseInt(pageNumber) 
         }
     })
}

export default Feed