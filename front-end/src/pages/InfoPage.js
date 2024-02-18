import React, { useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { IoHome } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

function InfoPage() {

    const infoTabs = [{
        title: "1. Visa and Immigration Scams:",
        text: `Scammers may pose as immigration officials or agents offering expedited visa processing or guarantees of approval for a fee. International students should be informed that legitimate visa processes do not involve payment outside of official government channels, and they should verify the credentials of anyone offering immigration assistance.

        Example:
        \nAn international student, let's call her Ana, has been accepted to study in the UK. She receives an email from someone claiming to be an immigration consultant or official with the UK Home Office. The email informs Ana that her visa application has been flagged for additional processing and that she needs to pay an expedited processing fee to ensure her visa is approved in time for the start of the semester. The email includes official-looking logos and language that seems convincing at first glance.
        
        \nWarning Signs:
        
        \nRequest for Payment: Legitimate immigration processes typically do not involve requests for payment outside of official government channels. If Ana is asked to pay an additional fee directly to an individual or organization, rather than through an official government website or service center, it could be a red flag.
        
        \nPressure or Urgency: Scammers often create a sense of urgency to pressure their victims into acting quickly without taking the time to verify the legitimacy of the request. Ana should be wary of any communication that insists on immediate payment or threatens consequences if she doesn't comply.
        
        \nPoor Grammar or Spelling: While scammers may attempt to mimic official communications, they often make mistakes in grammar, spelling, or formatting that can indicate the email is not legitimate. Ana should carefully review the email for any signs of inconsistencies or errors.
        
        \nUnsolicited Contact: If Ana did not initiate contact with the supposed immigration consultant or official, she should be cautious of unsolicited communications claiming to offer assistance with her visa application. Legitimate immigration authorities typically communicate with applicants through official channels and may schedule appointments or interviews as part of the process.
        
        \nHow to Verify Legitimacy:
        
        \nContact Official Channels: Ana should verify the status of her visa application directly through official channels, such as the UK Visas and Immigration website or the nearest British embassy or consulate in her home country. She can inquire about any additional processing requirements or fees that may be legitimate.
        
        \nSeek Guidance from University: Ana can reach out to her university's international student services office or admissions department for guidance and support with her visa application. University staff are often familiar with common scams targeting international students and can provide assistance in navigating the immigration process safely.
        
        \nReport Suspicious Activity: If Ana suspects she has been targeted by a visa or immigration scam, she should report the incident to the appropriate authorities, such as the UK Home Office or local law enforcement. Reporting scams not only helps protect Ana from further exploitation but also contributes to efforts to combat fraudulent activity targeting international students.
        
        \nGenuine Immigration Officer Communication:
        \nIn contrast to a scammer's approach, a genuine immigration officer or official would typically:
        
        \nUse official government email addresses or communication channels.
        \nProvide clear and specific instructions related to the visa application process, including any required fees or documentation.
        \nAvoid pressuring the applicant to make immediate payments or provide sensitive information without proper verification.
        \nOffer opportunities for the applicant to ask questions or seek clarification about the process.
        \nBy remaining vigilant, verifying the legitimacy of communications, and seeking guidance from trusted sources, international students like Ana can protect themselves from falling victim to visa and immigration scams while pursuing their studies abroad.,`
    }, {
        title: "2. Housing Scams:",
        text: `International students searching for accommodation in a new country may be targeted by fraudulent landlords or rental agencies. They should be cautious of offers that seem too good to be true, requests for upfront payment without viewing the property, or landlords who are unwilling to provide proper documentation.

        \nScenario:
        \nAn international student, let's call him Ali, is searching for accommodation in the UK before starting his studies. He comes across an online listing for a furnished apartment located near his university at a surprisingly low rent. The listing includes photos of the property and contact information for the supposed landlord. Ali contacts the landlord, who claims to be overseas and unable to meet in person, but assures him that the apartment is available for rent and requests a security deposit and first month's rent to secure the property.
        
        \nWarning Signs:
        
        \nUnrealistically Low Rent: Scammers often lure victims with offers that seem too good to be true, such as significantly below-market rental prices. Ali should be cautious of listings that offer unusually low rent for properties in desirable locations or with desirable amenities.
        
        \nRemote Landlord: If the landlord claims to be overseas or unable to meet in person, it could be a red flag. Legitimate landlords or property managers typically conduct in-person viewings of the property and provide opportunities for tenants to ask questions or address concerns face-to-face.
        
        \nPressure to Pay Upfront: Scammers may pressure their victims to make upfront payments, such as security deposits or rent payments, before they have had the opportunity to view the property in person or sign a lease agreement. Ali should be wary of any requests for payment before he has had a chance to verify the legitimacy of the listing and the landlord.
        
        \nLack of Documentation or Official Channels: If the landlord is unwilling or unable to provide proper documentation, such as a lease agreement or proof of ownership, it could indicate that the listing is fraudulent. Ali should always insist on reviewing a formal lease agreement and verifying the landlord's identity and ownership of the property through official channels.
        
        \nHow to Verify Legitimacy:
        
        \nSchedule an In-Person Viewing: Ali should insist on scheduling an in-person viewing of the property before making any commitments or payments. Viewing the property in person allows him to assess its condition, verify its existence, and ask questions directly to the landlord or property manager.
        
        \nResearch the Landlord and Property: Ali can conduct online research to verify the landlord's identity and search for any reviews or complaints related to the property or rental listing. He can also check public records or property databases to confirm ownership of the property.
        
        \nUse Reputable Rental Platforms: Ali should use reputable rental platforms or websites that have verified listings and offer protections for tenants. These platforms often have mechanisms in place to verify the identity of landlords and protect users from fraudulent listings.
        
        \nGenuine Housing Estate Agent Communication:
        \nIn contrast to a scammer's approach, a genuine housing estate agent or landlord would typically:
        
        \nProvide detailed information about the property, including its location, amenities, and rental terms.
        \nArrange for in-person viewings of the property at mutually convenient times.
        \nOffer a formal lease agreement outlining the terms and conditions of the rental arrangement.
        \nBe transparent and responsive to tenants' questions or concerns throughout the rental process.
        \nBy staying vigilant, verifying the legitimacy of rental listings and landlords, and conducting thorough due diligence before making any commitments or payments, international students like Ali can protect themselves from falling victim to housing scams while searching for accommodation abroad.`
    },
    {
        title: "3. Banking and Financial Scams:",
        text: `International students may be unfamiliar with the local banking system and vulnerable to scams involving fraudulent bank accounts, unauthorized charges, or phishing attempts targeting their financial information.

    \nScenario:
    \nAn international student, let's call her Maria, receives a phone call from someone claiming to be from her bank's fraud department. The caller informs Maria that there has been suspicious activity on her account and that she needs to provide her account details, including her username, password, and security questions, to verify her identity and prevent further unauthorized transactions. The caller sounds convincing and urges Maria to act quickly to avoid potential financial loss.
    
    \nWarning Signs:
    
    \nUnsolicited Contact: If Maria receives an unexpected phone call, email, or text message claiming to be from her bank or financial institution, it could be a red flag. Legitimate banks typically do not initiate contact with customers to request sensitive personal or financial information unsolicited.
    
    \nPressure to Provide Information: Scammers often create a sense of urgency or fear to pressure their victims into providing sensitive information without taking the time to verify the legitimacy of the request. Maria should be wary of any communication that insists on immediate action or threatens consequences if she doesn't comply.
    
    \nRequest for Personal Information: If the caller asks Maria to provide her account details, such as her username, password, PIN, or security questions, it is likely a scam. Legitimate banks have strict security protocols in place and would never ask customers to disclose such sensitive information over the phone or via email.

    \nUnusual Requests or Transactions: Maria should be cautious of any requests or instructions from the caller that seem unusual or unexpected, such as transferring funds to a different account or purchasing gift cards to resolve an issue. Scammers may attempt to trick victims into making unauthorized transactions or providing access to their accounts.
    
    \nHow to Verify Legitimacy:
    
    \nContact the Bank Directly: Maria should hang up the phone and contact her bank directly using the official customer service number listed on the bank's website or her account statement. She can inquire about any suspicious activity on her account and verify the legitimacy of any communication she received.
    
    \nNever Share Sensitive Information: Maria should never disclose her account details, passwords, or security information to anyone over the phone, via email, or online unless she has initiated the communication with a trusted and verified source.
    
    \nEducate Yourself About Common Scams: Maria can familiarize herself with common banking and financial scams targeting international students and learn how to recognize and avoid them. Many banks provide resources and guidance on their websites to help customers protect themselves from fraud and scams.
    
    \nGenuine Bank Communication:
    \nIn contrast to a scammer's approach, a genuine bank or financial institution would typically:
    
    \nEncourage customers to verify the legitimacy of any communication claiming to be from the bank and provide guidance on how to do so.
    \nNever request sensitive personal or financial information unsolicited, such as account numbers, passwords, or security questions.
    \nOffer secure channels for customers to report suspicious activity, such as fraudulent emails or phone calls, and provide assistance in securing their accounts if necessary.
    \nBy staying vigilant, verifying the legitimacy of banking communications, and never sharing sensitive information with unknown or unverified sources, international students like Maria can protect themselves from falling victim to banking and financial scams while managing their finances abroad.
    `
    }]
    const [currentTabIndex, setCurrentTabIndex] = useState(0)
    const navigate = useNavigate()
    const handleTabClick = (a) => {
        setCurrentTabIndex(i => i + a)
    }

    return (
        <div>

            <div className='flex flex-row items-center gap-5 w-full justify-between shadow-xl p-3'>
                <FaArrowLeft size={25} onClick={() => navigate(-1)} />
                <div className=''>
                    <div className='bot-name'>Frauducation</div>
                </div>
                <IoHome size={35} onClick={() => navigate('/dashboard')} />
            </div>
            <div className='flex flex-col px-6 py-10 items-center'>
                <h1 className='mb-10 font-bold text-lg'>{infoTabs[currentTabIndex].title}</h1>
                <div>{infoTabs[currentTabIndex].text}</div>
                <div className='flex justify-between w-full mt-10'>
                    {!currentTabIndex == 0 && <button onClick={() => handleTabClick(-1)}
                        className=' border-red-300 p-2 bg-red-200 border-2 rounded-full px-6'>Back</button>}
                    {currentTabIndex == (infoTabs.length - 1) ? <></> : <button onClick={() => handleTabClick(1)}
                        className=' border-green-300 p-2 bg-green-200 border-2 rounded-full px-6'>Next</button>}
                </div>
            </div>
        </div>
    )
}

export default InfoPage