export const API_KEY = 'AIzaSyBgxelVrMvD0Nh7UNHv_b42GXsKjSoqKUI';

export const value_converter = (value) =>{
    if(value>=1000000)
    {
        return  Math.floor(value/1000000)+"M";
    }
    else if(value>=1000)
    {
        return  Math.floor(value/1000000)+"K";
    }
    else{
        return value;
    }
}
