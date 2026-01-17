// Seleccionar todos los contenedores de tecnología


const contenedores = document.querySelectorAll('.container_logo_tecnologia');
console.log("JavaScript cargado correctamente");
contenedores.forEach(contenedor => {
    const img = contenedor.querySelector('img');
    
    // Cuando el mouse entra al contenedor
    contenedor.addEventListener('mouseenter', () => {
        contenedor.style.backgroundColor = 'black';
        
        // Cambiar la imagen según su ID
        if (img.id === 'python_logo') {
            img.src = 'img/ImgTecnoInfo/python-med-colored.png';
        } else if (img.id === 'php_logo') {
            img.src = 'img/ImgTecnoInfo/phphmed-colored (2).png';
        } else if (img.id=='html_logo'){
            img.src = 'img/ImgTecnoInfo/html-icon.colored.png';
        }
        else if (img.id=='css_logo'){
            img.src = 'img/ImgTecnoInfo/icon-css-colored.png';
        }
        else if (img.id=='js_logo'){
            img.src = 'img/ImgTecnoInfo/icons8-javascript-colored.png';
        }
        else if (img.id=='sqlss_logo'){
            img.src = 'img/ImgTecnoInfo/icons8-servidor-microsoft-colored.png';
        }
         else if (img.id=='postgre_logo'){
            img.src = 'img/ImgTecnoInfo/icons8-postgresql-colored.png';
        }
        else if (img.id='mysql_logo'){
            img.src='img/ImgTecnoInfo/icons8-mysql-100 (1).png';
        }
       
    });
    
    // Cuando el mouse sale del contenedor
    contenedor.addEventListener('mouseleave', () => {
        contenedor.style.backgroundColor = '';
        
        // Volver a la imagen original
        if (img.id === 'python_logo') {
            img.src = 'img/ImgTecnoInfo/pythonmed.png';
        } else if (img.id === 'php_logo') {
            img.src = 'img/ImgTecnoInfo/phphmed (1).png';

        } else if (img.id === 'html_logo') {
            img.src = 'img/ImgTecnoInfo/html-icon.png';}

          else if (img.id === 'css_logo') {
            img.src = 'img/ImgTecnoInfo/icons8-css-100.png';}

          else if (img.id === 'js_logo') {
            img.src = 'img/ImgTecnoInfo/icons8-javascript-100.png';}
          else if (img.id === 'sqlss_logo') {
            img.src = 'img/ImgTecnoInfo/icons8-servidor-microsoft.png';}

          else if (img.id === 'mysql_logo') {
            img.src = 'img/ImgTecnoInfo/icons8-mysql-100.png';}
            
          else if (img.id === 'postgre_logo') {
            img.src = 'img/ImgTecnoInfo/icons8-postgresql.png';}

        });
        
    
})
