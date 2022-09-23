//Custom testing API call

const test = async () => {
    try{
        const res = await fetch("http://localhost:3001/api/generate-code");
        const data = await res.json();
        return data.code
    } catch(err){
        console.log(err);
    }
}


export default async function handler(req, res) {
    console.time('start');
    const arr = Array.from(Array(100000).keys());
    const arr_check = []

    console.log(arr.length);


    for(const elem of arr){
        const c = await test();

        arr_check.push(c);
    }

    const hasDuplicates = (_arr) => _arr.length !== new Set(_arr).size;

    console.log(arr_check.length);

    const testRes = hasDuplicates(arr_check);
    console.log(testRes);

    res.status(200).json({ result:testRes });
}