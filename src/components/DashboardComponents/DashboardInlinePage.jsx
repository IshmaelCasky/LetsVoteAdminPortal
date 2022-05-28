import React from 'react'
import { CreateVoteSession } from './CreateVoteSession'
import { CurrentVotingSessions } from './CurrentVotingSessions'
import { DashboardInlineHomePage } from './DashboardInlineHomePage'
import { VotingSessionsWinner } from './VotingSessionsWinner'

export const DashboardInlinePage = ({page}) => {
  return (
    <div className='w-[100%] h-[100%]'>
        {page === "Home" ? <DashboardInlineHomePage/> : null}
        {page === "CreateVoteSession" ? <CreateVoteSession/> : null}
        {page === "Winners" ? <VotingSessionsWinner/> : null}
        {page === "CurrentVotingSessions" ? <CurrentVotingSessions /> : null}
    </div>
  )
}
