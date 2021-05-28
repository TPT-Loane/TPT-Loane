# What is .ebextentions?

.ebextentions is a folder responsible for the configuration of elastic beanstalk

It is populated by .config files formatted in either yaml or json, they are run in alphabetical order.

# Where can I learn more about it?

## AWS Documentation

[.ebextentions documentation](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/ebextensions.html)
[option settings](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/ebextensions-optionsettings.html)

# What do the files do?

## beanstalk.config

Sets the [Instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Instances.html) type to [t2.small](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#AvailableInstanceTypes)
