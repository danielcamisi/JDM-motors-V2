function carregar(){
    fetch('https://api.jdm-motors.com.br/api/v1/cars')

    .then(response => response.json())
}