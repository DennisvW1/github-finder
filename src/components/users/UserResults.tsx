import React, { useContext } from 'react'
// @ts-ignore
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../context/github/GithubContext';

function UserResults() {
    const { users, isLoading }: any = useContext(GithubContext)

    if (!isLoading) {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user: any) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    } else {
        return <Spinner />
    }
}

export default UserResults