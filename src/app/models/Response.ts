interface ProductResponse {
	id: number;
	name:string,
	description:string,
	imageLink:string,
	price:number,
	category:string,
	discount:number
}

export interface Response{
	products : ProductResponse[]
}