const h1=document.createElement('h1');//create header
h1.textContent="Welcome To your Shop";
document.body.insertAdjacentElement('afterbegin',h1);
// const br=document.createElement('br');
/*create form and sale input and  */

const form=document.createElement('form');
h1.insertAdjacentElement('afterend',form);
form.setAttribute('action','');
form.setAttribute('method','post');
const productInput=document.createElement('input');
// productInput.insertAdjacentElement('afterend',br);
form.append(productInput);
const numberInput=document.createElement('input');
form.append(numberInput);
const productLable=document.createElement('label');
productLable.textContent='Select Product: ';
const numberLable=document.createElement('label');
numberLable.textContent="Number product: ";
numberLable.insertAdjacentElement('beforebegin',document.createElement('br'));
productInput.insertAdjacentElement('beforebegin',productLable);
numberInput.insertAdjacentElement('beforebegin',numberLable);
const submit=document.createElement('input');
submit.setAttribute('type','submit');
submit.textContent="Buy";
form.insertAdjacentElement('beforeend',submit);
submit.insertAdjacentElement('beforebegin',document.createElement('br'));

/////////////////////////////////////////// Craete Table ///////////////////////////////////


