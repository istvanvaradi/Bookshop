var colors = {
  text: '#000000',
  background: '#aaaaaa',
  something_else: 'blue',
}

const fragment = new DocumentFragment()
const header = document.createElement('h1')
const text = document.createTextNode('Best bookstore ever')
const main = document.getElementById('main')
var totalSum = document.createElement('h4')

var cartArray = 0

//adding class
main.setAttribute('class', 'color')
//creates
const cardCollection = document.createElement('div')
cardCollection.setAttribute('class', 'cardCollection')

//appends
header.textContent = 'Book Shop'
main.appendChild(header)

var global
const cartSlide = document.createElement('aside')

cartSlide.setAttribute('class', 'cartSlide')
main.appendChild(cartSlide)
let btnsum = document.createElement('button')
btnsum.setAttribute('id', 'sumbtn')
btnsum.innerHTML = 'Confirm'
btnsum.onclick = () => {
  location.href = 'form.html'
}
cartSlide.appendChild(btnsum)
cartSlide.appendChild(totalSum)
//here creating everything from fetched data
fetch('books.json') //path to the file with json data
  .then((response) => {
    return response.json()
  })
  .then((data) => (global = data))
  .then((data) => {
    for (const element of global) {
      const card = document.createElement('div')
      const myPara1 = document.createElement('h2')
      const bookTitle = document.createElement('h5')
      const bookImg = document.createElement('img')
      const button = document.createElement('button')
      const link = document.createElement('a')
      const description = document.createElement('p')
      const price = document.createElement('h2')
      price.innerHTML = `${element['price']} EUR`
      let inc = 1
      inc++
      console.log(inc)
      link.setAttribute('id', 'seemore')
      //set attributes
      button.onclick = click
      link.onclick = moreInfo
      card.setAttribute('class', 'card')

      button.innerHTML = 'Add to Bag'
      link.innerHTML = 'Show more'
      description.innerHTML = element['description']
      myPara1.textContent = element['author']
      bookImg.src = element['imageLink']
      bookTitle.innerHTML = element['title']
      //append
      card.appendChild(bookImg)
      card.appendChild(myPara1)
      card.appendChild(bookTitle)
      card.appendChild(button)
      card.appendChild(link)
      card.appendChild(price)
      cardCollection.appendChild(card)
      main.appendChild(cardCollection)

      //pop up creation
      function moreInfo(e) {
        link.setAttribute('class', 'hide')
        let obj = {
          title: bookTitle.innerHTML,
          description: description.innerHTML,
        }
        let popUp = document.createElement('div')
        let extended = document.createElement('p')
        let title = document.createElement('h2')
        let xbutt = document.createElement('button')
        xbutt.innerHTML = 'Close'
        extended.innerHTML = obj.description
        title.innerHTML = obj.title
        popUp.appendChild(xbutt)
        popUp.appendChild(title)
        popUp.appendChild(extended)
        popUp.setAttribute('class', 'popUp')
        card.appendChild(popUp)
        //onclick on more info button
        xbutt.onclick = () => {
          popUp.setAttribute('class', 'hide')
          link.removeAttribute('class', 'hide')
        }
      }

      //Drag On Cardss
      card.setAttribute('draggable', 'true')
      bookImg.setAttribute('draggable', 'false')
      card.ondrag = () => {
        e.preventDefault()
        let target = e.target //sima egyenlosegjel kell ide
        target.ondrag = click()
        let first = target.childNodes[0]
      }
      //drag ends here
      function click(evt) {
        let title = evt.target.previousSibling
        let author = title.previousSibling
        let img = author.previousSibling.src
        let cartCard = document.createElement('div')
        let authorCart = document.createElement('h2')
        let imageCart = document.createElement('img')
        let button = document.createElement('button')
        let cartPrice = document.createElement('h2')
        let smallTitle = document.createElement('p')
        button.innerHTML = 'X'
        imageCart.src = img
        smallTitle.innerHTML = title.innerHTML
        cartPrice = price.innerHTML
        authorCart.innerHTML = author.innerHTML
        cartCard.appendChild(authorCart)
        cartCard.appendChild(imageCart)
        cartCard.appendChild(smallTitle)
        cartCard.appendChild(button)
        //SUM and CARD
        cartArray += Number(cartPrice.slice(0, cartPrice.length - 4))

        //cart Cards
        cartCard.setAttribute('class', 'card')
        totalSum.textContent = `total: ${cartArray} EUR`
        cartSlide.appendChild(cartCard)
        button.onclick = (e) => {
          let elem = e.target
          let btnDad = this.parentNode
          cartCard.remove()
          cartArray =
            cartArray - Number(cartPrice.slice(0, cartPrice.length - 4))
          totalSum.textContent = `total: ${cartArray} EUR`
        }
      }
    }
  })
localStorage.setItem('final', cartArray)
