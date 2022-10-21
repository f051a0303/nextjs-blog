import useSWR from 'swr';
import Error from "next/error"
import Card from "react-bootstrap/Card";


export default function ArtworkCardDetail(props){

    const {data, error} = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${props.objectID}`);

    if(!data){
        return (
            <>
                <Error statusCode={404}></Error>
            </>
        );

    }
    if(data){
        return (
            <>
                <Card>
                    {data.primaryImage ? 
                    <Card.Img variant="top" src={data.primaryImage} />
                    :
                    <p>No Photo display</p>
                    }
                    <Card.Body>
                        <Card.Title> {data?.title}</Card.Title>
                        <Card.Text>
                            
                            <strong> Date: </strong> {data.objectDate ? data.objectDate : "N/A"}
                            <br/>
                            <strong> Classification: </strong> {data.classification ? data.classification : "N/A"}
                            <br/>
                            <strong> Medium: </strong> {data.medium ? data.medium : "N/A"}
                            <br/>
                            <br/>
                            <strong> Artist: </strong>{data.artistDisplayName ? data.artistDisplayName + " "  : "N/A"}
                            {data.artistWikidata_URL ? 
                            (<a href={data.artistWikidata_URL} target="_blank" rel="noreferrer">wiki</a>)
                            : 
                            <></>
                            }
                            <br/>
                            <strong> Credit Line: </strong>{data.creditLine ? data.creditLine : "N/A"}
                            <br/>
                            <strong> Dimensions: </strong>{data.dimensions ? data.dimensions : "N/A"}
                            
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        );
    }
    else{
        return null;
    }
   

}