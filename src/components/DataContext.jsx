import React, { createContext, useContext, useState} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from 'nanoid';
import { collection } from 'firebase/firestore';
import { getDocs, addDoc, doc,  deleteDoc} from 'firebase/firestore';
import { db } from '../firebase';
import { toast } from 'react-toastify';

const DataContext = createContext();

export const useDataContext = () => {
    return useContext(DataContext);
}

export const DataProvider = ({children}) => {
    const [candidates, setCandidates] = useState([]);
    const [InlinePage, setInlinePage] = useState("Home");
    const [votingSessions, setVotingSessions] = useState([]);
    const votingsCollectionsRef = collection(db, "VotingSessions");

    const setPage = (page) => {
        setInlinePage(page)
        getVotingSessions();
    }

    const addCandidate = (name, age, description) => {
		const newCandidate = {
			id: nanoid()
		};

        newCandidate[name] = {
            
            Age: age,
            Description: description,
            Votees : [],
            VoteCount : 0
            
        }

		const newCandidates = [...candidates, newCandidate];

		setCandidates(newCandidates);
        console.log(candidates);
	};

    const deleteCandidate = (id) => {
		const newNotes = candidates.filter((candidate) => candidate.id !== id);
		setCandidates(newNotes);
	};

    const CreateVoteSession = (name, date) => {
        var candids = {}
        candidates.map(candidate => {return candids[Object.entries(candidate)[1][0]] = Object.entries(candidate)[1][1]});

        if(candidates.length > 0){
            const Session = {
                SessionName : name,
                SessionEndDate : date,
                Candidates : candids,
                SessionEnd : false,
                SessionWinner : null,
                SessionVoters : []
            }
            addDoc(votingsCollectionsRef, Session);
            setCandidates([]);
            getVotingSessions();
            setInlinePage("CurrentVotingSessions");
        } else {
            toast.error("please add candidates before creating a voting session");
        }
    }

    const DeleteVoteSession = (id) => {
        const docRef = doc(db, "VotingSessions", id);
        deleteDoc(docRef);
        getVotingSessions();
    }

    
    const getVotingSessions = async () => {
        const data = await getDocs(votingsCollectionsRef);
        setVotingSessions(data.docs.map(doc => ({...doc.data(), id: doc.id})));
    };
      

    const data = {
        addCandidate,
        deleteCandidate,
        candidates,
        CreateVoteSession,
        setInlinePage,
        InlinePage,
        setPage,
        votingSessions,
        setVotingSessions,
        DeleteVoteSession,
        getVotingSessions
    }


    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}
