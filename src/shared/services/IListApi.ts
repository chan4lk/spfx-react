export interface IListApi {
    getItemsByContentType<T>(type:string) : Promise<T>;
}