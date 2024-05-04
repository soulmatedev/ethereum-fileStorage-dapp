const ganacheUrl = 'http://localhost:7545';
const web3 = new Web3(new Web3.providers.HttpProvider(ganacheUrl));

const contract =  new web3.eth.Contract([
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "x",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "operator",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "y",
				"type": "uint256"
			}
		],
		"name": "calculate",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
], '0xb2BF3bB22bfB2Db5A9FdfEC3EddD32ce125bD0e5');

contract.methods.properties('0x5788367745C3D5CB4ffD353e772f0E1FdBA70E71').call((error, result) => {
	if (error) {
		console.error('Ошибка при вызове метода контракта:', error);
	} else {
		console.log('Информация о недвижимости:', result);
	}
});

document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('.buttonBox button');
	const inputField = document.querySelector('input[type="text"]');

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			const buttonValue = button.getAttribute('name');

			if (buttonValue === '=') {
				calculateResult();
			} else {
				addToInput(buttonValue);
			}
		});
	});

	function addToInput(value) {
		// Добавляем число или оператор к текущему значению поля ввода
		inputField.value += value;
	}

	function calculateResult() {
		const expression = inputField.value;

		try {
			const result = eval(expression);
			inputField.value = result.toString(); // Устанавливаем результат в поле ввода как строку
		} catch (error) {
			inputField.value = 'Error';
		}
	}
});

