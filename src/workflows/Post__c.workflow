<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>Post_Approved2</fullName>
        <description>Post Approved2</description>
        <protected>false</protected>
        <recipients>
            <field>Writer__c</field>
            <type>contactLookup</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/Post_Approved</template>
    </alerts>
    <alerts>
        <fullName>Post_Rejected_Email_alert2</fullName>
        <description>Post Rejected - Email alert2</description>
        <protected>false</protected>
        <recipients>
            <field>Writer__c</field>
            <type>contactLookup</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/Post_Rejected</template>
    </alerts>
    <fieldUpdates>
        <fullName>Post_Rejected2</fullName>
        <field>Status__c</field>
        <literalValue>Draft</literalValue>
        <name>Post Rejected2</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>Status_to_Ready</fullName>
        <field>Status__c</field>
        <literalValue>Ready</literalValue>
        <name>Status to Ready</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
    </fieldUpdates>
    <fieldUpdates>
        <fullName>field_updated</fullName>
        <field>Status__c</field>
        <literalValue>Under Review</literalValue>
        <name>field updated</name>
        <notifyAssignee>false</notifyAssignee>
        <operation>Literal</operation>
        <protected>false</protected>
    </fieldUpdates>
</Workflow>
