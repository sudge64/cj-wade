const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
  })
})

Array.prototype.forEach.call(document.querySelectorAll('.file-upload__button'), function(button){
    const hiddenInput = button.parentElement.querySelector('.file-upload__input');
    const label = button.parentElement.querySelector('.file-upload__label');
    const defaultLabelText = 'No file(s) selected';

    label.textContext = defaultLabelText;
    label.title = defaultLabelText;

    button.addEventListener('click', function(){
        hiddenInput.click();
    })

    hiddenInput.addEventListener('change', function(){
        const filenameList = Array.prototype.map.call(hiddenInput.files, function(file){
            return file.name;
        })
        label.textContext = filenameList.join(', ') || defaultLabelText;
        label.title = label.textContent;
    })
});

Array.prototype.forEach.call(document.querySelectorAll('.file-download__button'), function(button){
    const hiddenInput = button.parentElement.querySelector('.file-download__input');
    const label = button.parentElement.querySelector('.file-download__label');
    const defaultLabelText = 'No file(s) selected';

    label.textContext = defaultLabelText;
    label.title = defaultLabelText;

    button.addEventListener('click', function(){
        hiddenInput.click();
    })

    hiddenInput.addEventListener('change', function(){
        function downloadFile(data, name = "myData.txt"){
            const blob = new Blob ([data], {type:"octet-stream"});
        
            const href = URL.createObjectURL(blob);
            
            const a = Object.assign(document.createElement('a'), {href, 
                style:"display:none", 
                download: name});
            
            document.appendChild(a);
            
            a.click();
        
            URL.revokeObjectURL(href);
            
            a.remove();
        }
        
    })
});

/*function downloadFile(data, name = "myData.txt"){
    const blob = new Blob ([data], {type:"octet-stream"});

    const href = URL.createObjectURL(blob);
    
    const a = Object.assign(document.createElement('a'), {href, 
        style:"display:none", 
        download: name});
    
    document.appendChild(a);
    
    a.click();

    URL.revokeObjectURL(href);
    
    a.remove();
}*/