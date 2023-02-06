//Bringing in the articles
import { articles } from "/src/js/data/articles.js";

//Setting up article previews for all the articles. Upon clicking one of these, the proper article should appear
let articleList = document.getElementById('previewArticles');

for(let i = 0; i < articles.length; i++) {
    articleList.innerHTML += 
    `
    <div class='preview' data-id='${articles[i].uid}'>
        <span class='preview-title'>${articles[i].title}</span>
        <span class='preview-author'>By ${articles[i].author}</span>
    </div>
    `
}

articleList.addEventListener('click', bringUpArticle);
    let currentArticleElement = document.querySelector('.viewer-current');
    function bringUpArticle(e)
        {

            let currentArticleId = e.target.closest('.preview').dataset.id;
                for(let i = 0; i < articles.length; i++){
                
                   

                    if(articles[i].uid == currentArticleId)
                    {

                        currentArticleElement.innerHTML = 
                        `
                        <div class="article">
                            <h2> ${articles[i].title} </h2>
                        <div class="article-information">
                        
                        <div class="information-author">
                            <h3> ${articles[i].author}</h3>
                        </div>
                        <div class="information-date">
                            <h3>${(new Date(Number(articles[i].date))).getDate()}/${(new Date(Number(articles[i].date))).getMonth()}/${(new Date(Number(articles[i].date))).getFullYear()}</h3>
                        </div>

                        </div>
                       
                            <img src="${articles[i].image}">
                        <p class="article-body">${articles[i].text}</p>


                        

                        </div>
                        `


                    }
                }

        }





//COMPLETE THE REST BASED ON CLASS DISCUSSION AND THE EXAMPLE

//Here is sample html structure: 
/*
<div class='article'>
    <h2>title</h2>
    <div class='article-information'>
        <h3 class='information-author'>author</h3>
        <h3 class='information-date'>date</h3>
    </div>
    <img>
    <div class='article-body'>body text</div>
</div>
*/




