/**
 * 
 * @param description  the description of the product
 * @param max | character numbers of the description that allowded to show
 * @returns the description cut with three dots to remain
 */
export function descriptionSlice(description:string, max:number = 50){
    if(description.length >= max) return `${description.slice(0,max)}...`;
    else return description;
}

export function numberWithCommas(x: string): string {
    return x?.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}