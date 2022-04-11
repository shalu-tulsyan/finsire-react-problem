export function updateData(data:string, count: number): Promise<string>
{
    return new Promise((resolve, reject) =>
    {
        if(count<=4)
            resolve(data);
        else
            reject(alert('empty dataset'))
    })   
}