import { ChangeEvent, useEffect, useState } from "react"
import { getDogsService } from "../../../services/dog.service"
import { Dog } from "../../../models/Dog"
import DogItem from "./dogsItem"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { ContainerSearch, InputSearch } from "../../styled-components/inputSearch"
import { LoaderContainer, Loader } from "../../styled-components/loading"

const initialForm = {
    search: '',
}

export default function Dogs() {

    const [dogs, setDogs] = useState<Dog[]>([])
    const [filter, setFilter] = useState<Dog[]>([])
    const [formValues, setFormvalues] = useState(initialForm)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getDogs()
    }, [])


    const getDogs = () => {
        getDogsService()
            .then(data => {
                setDogs(data);
                setFilter(data);
                setIsLoading(false)
            })
    }

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target;

        setFormvalues({
            ...formValues,
            [name]: value
        })
        // filterDogs();
        console.log(dogs);
        

    }

    /* const filterDogs = () => {
        console.log(filter.length);

        let dataSearch = dogs.filter((e) => e.name.includes(formValues.search))
        setFilter(dataSearch);
    } */

    const results = !formValues.search ? filter : filter.filter((dato) =>
        dato.name.toLowerCase().includes(formValues.search.toLocaleLowerCase()))


    return (
        <>
            {isLoading ? (
                <LoaderContainer>
                    <Loader></Loader>
                </LoaderContainer>
            )
                : (
                    <>
                        <div className="flex-searcher">
                            <ContainerSearch>
                                <InputSearch
                                    type="text"
                                    name="search"
                                    placeholder="Search by name"
                                    onChange={handleSearchChange}
                                />
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </ContainerSearch>
                        </div>


                        <div className="flex-dog-item">
                            {results.map(dog => (
                                <div key={dog.id} className="">
                                    <DogItem dog={dog} />
                                </div>
                            ))}
                        </div>
                    </>
                )
            }
        </>
    )
}