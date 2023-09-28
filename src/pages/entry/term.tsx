import MainButton from "../../components/utils/buttons/MainButton";
import MainLink from "../../components/utils/buttons/MainLink";
import SecondaryButton from "../../components/utils/buttons/SecondaryButton";
import SecondaryLink from "../../components/utils/buttons/SecondaryLink";

export default function Term(){
    return (
        <main className="flex flex-col h-screen justify-evenly">
            <div className='text-center'>
                <h1 className='text-xl font-semibold'>Terms and Conditions</h1>
            </div>
            <div className='min-h-[500px] px-4'>
                <textarea className="text-sm h-full w-full rounded-xl p-4" disabled={true}>
Terms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and Conditions
Terms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and Conditions
Terms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and Conditions
Terms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and Conditions
Terms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and Conditions
Terms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and Conditions
                </textarea>
            </div>
            <div className='flex justify-evenly'>
                <SecondaryLink to='/' text="Decline"/>
                <MainLink to='/register' text="Accept"/>
            </div>
        </main>
    )
}