const cards = document.querySelectorAll('.card');
        const cartItems = document.getElementById('cart-items');
        const totalPriceElement = document.getElementById('total-price');
        const showBillBtn = document.getElementById('show-bill-btn');
        let totalPrice = 0;

        cards.forEach(card => {
            card.addEventListener('click', () => {

                const mealName = card.querySelector('.card-body p').innerText.split(" - ")[0];
                const price = parseFloat(card.querySelector('.card-body p').innerText.split(" - ")[1].replace('$', ''));

                const listItem = document.createElement('li');

                listItem.innerHTML = `
                    ${mealName} - ${price}$
                    <button class="delete-btn">Delete</button>
                `;
                cartItems.appendChild(listItem);

                totalPrice += price;
                totalPriceElement.innerText = totalPrice.toFixed(2);

                const deleteBtn = listItem.querySelector('.delete-btn');
                deleteBtn.addEventListener('click', () => {

                    cartItems.removeChild(listItem);

                    totalPrice -= price;
                    totalPriceElement.innerText = totalPrice.toFixed(2);
                });
            });
        });
        showBillBtn.addEventListener('click', () => {
            let billDetails = "Your Bill:\n";
            const items = cartItems.querySelectorAll('li');
            items.forEach(item => {
                billDetails += item.textContent.replace('Delete', '').trim() + '\n';
            });
            billDetails += `\nTotal: ${totalPrice.toFixed(2)}$`;
            alert(billDetails);
        });