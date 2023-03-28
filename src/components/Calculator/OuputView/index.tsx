import React from 'react'
import { formatNumber } from '../../../helpers/calculator.helper'
import { Button } from '../../../styles/Form'
import { SmallText, SubHeading, Text } from '../../../styles/Typography'
import { EmailData, EmailDataContainer, MessageBox, OtherDataContainer, OutputData, OutputDataItem, OutputsContainer } from '../styles'
import { IoPeopleOutline } from 'react-icons/io5'
import { MdOutlineBusinessCenter } from 'react-icons/md'
import { MdOutlineLeaderboard } from 'react-icons/md'
import { FaRegHandshake } from 'react-icons/fa'
import { BsChatDots } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { CiWarning } from 'react-icons/ci'
import { AiOutlineLike } from 'react-icons/ai'
import { Flex } from '../../../styles/Shared'

interface PropsType {
    outputData: any
}

const OutputView: React.FC<PropsType> = ({ outputData }) => {


    const redirectUser = () => {
        window.location.href = 'https://www.oneshot.ai/'
    }

    return (
        <OutputsContainer>
            <SubHeading>Result</SubHeading>
            <OutputData>
                <EmailDataContainer>
                    <EmailData>
                        <Text className='email-large'>{formatNumber(outputData.emails)}</Text>
                        <Flex style={{ gap: 10 }}>
                            <AiOutlineMail size={20} color={'#fff'} />
                            <Text className='op-data-label'>Emails</Text>
                        </Flex>
                    </EmailData>
                </EmailDataContainer>
                <OtherDataContainer>
                    <OutputDataItem>
                        <Flex style={{ gap: 10 }}>
                            <IoPeopleOutline size={20} color={'#fff'} />
                            <Text className='op-data-label'>Customers: </Text>
                        </Flex>
                        <Text className='op-data-val'>{formatNumber(outputData.customers)}</Text>
                    </OutputDataItem>
                    <OutputDataItem>
                        <Flex style={{ gap: 10 }}>
                            <MdOutlineBusinessCenter size={20} color={'#fff'} />
                            <Text className='op-data-label'>Opportunities: </Text>
                        </Flex>
                        <Text className='op-data-val'>{formatNumber(outputData.opportunities)}</Text>
                    </OutputDataItem>
                    <OutputDataItem>
                        <Flex style={{ gap: 10 }}>
                            <FaRegHandshake size={20} color={'#fff'} />
                            <Text className='op-data-label'>Meetings: </Text>
                        </Flex>
                        <Text className='op-data-val'>{formatNumber(outputData.meetings)}</Text>
                    </OutputDataItem>
                    <OutputDataItem>
                        <Flex style={{ gap: 10 }}>
                            <MdOutlineLeaderboard size={20} color={'#fff'} />
                            <Text className='op-data-label'>Leads: </Text>
                        </Flex>
                        <Text className='op-data-val'>{formatNumber(outputData.leads)}</Text>
                    </OutputDataItem>
                </OtherDataContainer>
            </OutputData>
            <MessageBox className={outputData.emails > 100 ? 'warning' : ''}>
                {outputData.emails > 100 ? (
                    <>
                        <Flex style={{ gap: 4, marginBottom: '10px' }}><CiWarning size={20} /> <Text>Warning</Text></Flex>
                        <SmallText>
                            Researching and personalising all these {formatNumber(outputData.emails)} emails is humanly impossible
                            and hence why you should try out <a href='https://www.oneshot.ai/'>oneshot.ai</a> to make it fully AI
                            driven automated prospecting.
                        </SmallText></>
                ) : (
                    <>
                        <Flex style={{ gap: 4, marginBottom: '10px' }}><AiOutlineLike size={30} /> <Text>Message</Text></Flex>
                        <SmallText>
                            You can also try out <a href='https://www.oneshot.ai/'>oneshot.ai</a> to make it fully AI
                            driven automated prospecting.
                        </SmallText>
                    </>
                )}
            </MessageBox>
            <div>
                <SubHeading>
                    Want to try Oneshot?
                </SubHeading>
                <Text style={{ marginTop: '20px' }}>
                    80% of prospecting is manual work: discovery, research and messaging.
                    OneShot uses AI to automate this finding your ICP customers, researching
                    and creating highly personalized messaging.
                </Text>
                <Button style={{ margin: '30px auto 0' }} onClick={redirectUser}><BsChatDots size={16} /> Chat With Us</Button>
            </div>
        </OutputsContainer>
    )
}

export default OutputView