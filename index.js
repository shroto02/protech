    // Search Bar Functionality
    // Get the input element and list
    var searchInput = document.getElementById('searchInput');
    var itemList = document.getElementById('itemList');
    
    // Add event listener for input changes
    searchInput.addEventListener('input', function() {
        // Get the search query
        var query = searchInput.value.toLowerCase();

        // Get all list items
        var items = itemList.getElementsByTagName('li');

        // Loop through each item and hide/show based on the search query
        for (var i = 0; i < items.length; i++) {
            var itemText = items[i].innerText.toLowerCase();
            if (itemText.includes(query)) {
                items[i].style.display = 'block';
                //items[i].style.display = 'inline-block';
                items[i].style.marginRight = '50px';
            } else {
                items[i].style.display = 'none';
            }
        }
    });