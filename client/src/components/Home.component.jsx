import { useRecoilValue } from "recoil";
import Details from "./Details.component";
import Messege from "./Messege.component";
import allMesseges from "../store/atoms/allMeggeges.atom";

const HomeRoute = () => {

    const messeges = useRecoilValue(allMesseges);
    console.log(messeges);

    return (
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 max-h-[70vh] overflow-y-auto">
                {
                    messeges.map((item, index) => {
                        return <Messege key={index} messege={item} />
                    })
                }
            </div>
            <div className="col-span-2">
                <Details messeges={messeges} />
            </div>
        </div>
    )
}

export default HomeRoute;