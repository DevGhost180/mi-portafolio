const user = " vichenzoxd";
const domain = "@gmail.com";
const container = document.getElementById('contacto-container');

const link = document.createElement('a');
link.href = `mailto:${user}@${domain}`;
link.innerText = `${user}@${domain}`;

container.appendChild(link);