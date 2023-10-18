import React, { useEffect, useState, useContext } from "react";
import {
	Table,
	Form,
	Services,
	Profile,
	CompleteShipment,
	GetShipment,
	StartShipment,
} from "../../components/index";
import { TrackingContext } from "../../context/Tracking";

const index = () => {
	const {
		currentUser,
		createShipment,
		getAllShipments,
		completeShipment,
		getShipment,
		startShipment,
		getShipmentsCount,
	} = useContext(TrackingContext);

	const [createShipmentModal, setCreateShipmentModal] = useState(false);
	const [openProfile, setOpenProfile] = useState(false);
	const [startModal, setStartModal] = useState(false);
	const [completeModal, setCompleteModal] = useState(false);
	const [getModal, setGetModal] = useState(false);

	const [allShipmentsData, setAllShipmentsData] = useState();

	useEffect(() => {
		const getCampaignsData = getAllShipments();

		return async () => {
			const allData = await getCampaignsData;
			setAllShipmentsData(allData);
		};
	}, []);

	return (
		<>
			<Services
				setOpenProfile={setOpenProfile}
				setCompleteModal={setCompleteModal}
				setGetModal={setGetModal}
				setStartModal={setStartModal}
			/>
			<Table
				setCreateShipmentModal={setCreateShipmentModal}
				allShipmentsData={allShipmentsData}
			/>
			<Form
				createShipmentModal={createShipmentModal}
				createShipment={createShipment}
				setCreateShipmentModal={setCreateShipmentModal}
			/>
			<Profile
				openProfile={openProfile}
				setOpenProfile={setOpenProfile}
				currentUser={currentUser}
				getShipmentsCount={getShipmentsCount}
			/>
			<CompleteShipment
				completeModal={completeModal}
				setCompleteModal={setCompleteModal}
				completeShipment={completeShipment}
			/>
			<GetShipment
				getModal={getModal}
				setGetModal={setGetModal}
				getShipment={getShipment}
			/>
			<StartShipment
				startModal={startModal}
				setStartModal={setStartModal}
				startShipment={startShipment}
			/>
		</>
	);
};

export default index;
