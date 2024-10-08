var form = document.getElementById('addForm');
var itemList = document.getElementById("items");
var filter = document.getElementById('filter')

// Form submit event
form.addEventListener('submit', addItem);
// Delete even
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;
    
    // Create new li element
    var li = document.createElement('li');
    // Add Class
    li.className = 'list-group-item';
    // Add text Node with input value
    li.appendChild(document.createTextNode(newItem));
    
    // Create del button element
    var deleteBtn = document.createElement('button');
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append Button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);

    document.getElementById('item').value = '';
}

// Remve items
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter items
function filterItems(e){
    // covert text to lowercase
    var text = e.target.value.toLowerCase();
    
    // Get list
    var items = itemList.getElementsByTagName('li');
    // Conver to an Array
    Array.from(items).forEach(function(item){
        var ItemsName = item.firstChild.textContent;
        
        if(ItemsName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    });
}