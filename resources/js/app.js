import axios from 'axios'
import Noty from 'noty'
import initAdmin  from './admin'
import moment from 'moment'

// gets all the buttons in form of array from the class add to cart in home.ejs
let addToCart = document.querySelectorAll('.add-to-cart')
let cartCounter = document.querySelector(".cartCount")

// it is used to send the responce  
function updateCart(juices){
    // ajax call
    /* Axios: a javascript library used to make http request from node.  */
     
      axios.post('/update-cart', juices).then(res=>{
          cartCounter.innerText = res.data.totalQty
        // it shows notification for add items
          new Noty({
              type: 'success',            // if success then green color notification occur
              timeout:1000,
              text:'Item added to cart',
              progressBar: false,
              layout: 'topLeft',
          }).show()                  // display the notification

        }).catch(err=>{              // when there occur prblm in ordering then 
            new Noty({
                type: 'error',       // red color notifaction occur while show "somthing went wrong"
                timeout:1000,
                text:'something went wrong',
                progressBar: false,
                layout: 'topLeft',
            }).show()   
        })

}

// create an event to get the data when add-to-cart event is fired 
addToCart.forEach((btn) =>{
    btn.addEventListener('click', (e)=>{
        // converting the get string data into object 
        let juices = JSON.parse(btn.dataset.juices);
        // call a updateCart function
        updateCart(juices);
    })
})

// to disapper the alert msg after 2 sec
const alertMsg = document.querySelector('#success-alert')
if(alertMsg) {
    setTimeout(()=>{
        alertMsg.remove()
    }, 2000)
}

 

// change order status
let statuses = document.querySelectorAll('.status_line')
let hiddenInput = document.querySelector('#hiddenInput') 
let order = hiddenInput ? document.querySelector('#hiddenInput').value: null
order = JSON.parse(order)
let time = document.createElement('small')

function updateStatus(order){
    statuses.forEach((status)=>{
        status.classList.remove('step-completed')
        status.classList.remove('current')
    })
    let stepCompleted = true;
     statuses.forEach((status)=>{
         let dataProp = status.dataset.status
         if(stepCompleted){
             status.classList.add('step-completed')
         }
         if(dataProp === order.status){
             stepCompleted = false;
             time.innerText = moment(order.updatedAt).format('hh:mm A')
             status.appendChild(time)
             if(status.nextElementSibling){
                status.nextElementSibling.classList.add('current')
             }
            
         }
     })
}

updateStatus(order)




// Socket
let socket = io()
initAdmin(socket) 
// Join
if(order){
    socket.emit('attach',`order_${order._id}`)
}

//for order update without refresh the admin page
let adminAreaPath = window.location.pathname
if(adminAreaPath.includes('admin')) {
       initAdmin(socket) 
    socket.emit('attach', 'adminRoom')
    }
    


socket.on('orderUpdated', (data)=>{
    const updatedOrder = { ...order }
    updatedOrder.updatedAt = moment().format()
    updatedOrder.status = data.status
    updateStatus(updatedOrder)
    new Noty({
        type: 'success',
        timeout:1000,
        text:'Order updated',
        progressBar: false,
        layout: 'topLeft',
    }).show()
    
})
