import Boundary from "../../../components/utils/boundary"
import SecondaryLink from "../../../components/utils/buttons/SecondaryLink"
import TeritaryLink from "../../../components/utils/buttons/TeritaryLink"

export default function CellphoneTerms(){
    return (
        <main className="bg-black text-white h-full">
            <div className='text-center'>
                <h1 className='text-xl font-semibold py-8'>Terms and Conditions</h1>
            </div>
            <div className='h-[500px] px-4 mb-4'>
                <textarea 
                    className="text-sm h-full w-full rounded-xl p-4 resize-none" disabled={true}
                    value={`
Terms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and Conditions
Terms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and Conditions
Terms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and Conditions
Terms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and Conditions
Terms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and Conditions
Terms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and ConditionsTerms and Conditions
                    `}
                />

            </div>
            <div className='flex justify-evenly'>
                <SecondaryLink to='/' text="Decline"/>
                <TeritaryLink to='/cellphone/form' text="Accept"/>
            </div>
        </main>
    )
}