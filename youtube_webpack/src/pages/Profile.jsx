const Profile = () => {
    return (
        <div>
            <ProfileAvatarImage></ProfileAvatarImage>
            <ProfileItem />
            <EditButton />
            <WithdrawButton />
            <ReportButton />
            <ActiveToggle />
        </div>
    )
}

export default Profile;