# Meteor UIkit

Wrapper package for UIkit: http://getuikit.com/

## Troubleshooting

### Switcher isn't working

Boot it:

    Template.myTemplate.onRendered(function () {

        // Make UIkit Switcher work
        UIkit.switcher().boot()

    });

Reference: http://getuikit.com/docs/switcher.html