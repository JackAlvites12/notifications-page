const btnMarkAllRead = document.querySelector('.mark-read'),
      active = document.querySelectorAll('.--active'),
      notificationContent = document.querySelectorAll('.notification-content'),
      notificationCount = document.querySelector('.notifications__count'),
      isActive = document.querySelectorAll('.is-active');


// Event Listeners 

btnMarkAllRead.addEventListener('click', ()=>{
    notificationContent.forEach(element => {
        element.classList.remove('--active');
        notificationCount.style.display = 'none'
    })

    isActive.forEach( el => {
        el.style.display = 'none'
    })

    return /* Esto con la finalidad de no pulsar más veces el botón 
              aplicable sólo para páginas estáticas como el del reto. */
})


active.forEach( ( element, index) => {

        element.addEventListener('click', () => {
        
            let count = Number(notificationCount.textContent);
    
            if(count > 0){
                count--
    
                if(count === 0){
                    notificationCount.style.display = 'none'
                }
        
                notificationCount.innerText =  count;
            }
            
            isActive[index].style.display = 'none'
            element.classList.remove('--active');
        })
})


