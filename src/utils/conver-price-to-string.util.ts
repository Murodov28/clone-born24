export const convertPriceToString = (price: number) =>
	price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
